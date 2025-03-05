
import { toast } from "sonner";

// WHMCS API credentials
const WHMCS_API_IDENTIFIER = '3j6JdWh4QVkRXcBZmvHxlYks9AysFg6Z';
const WHMCS_API_SECRET = '96RxEzSKFTxaWSzRM9uIaXYFIZFHbv0G';
const WHMCS_URL = 'https://billing.enderhost.in';

interface WhmcsApiParams {
  [key: string]: string | number | boolean;
}

/**
 * Make a request to the WHMCS API
 */
const callWhmcsApi = async (action: string, params: WhmcsApiParams = {}) => {
  try {
    const apiParams = {
      identifier: WHMCS_API_IDENTIFIER,
      secret: WHMCS_API_SECRET,
      action,
      responsetype: 'json',
      ...params
    };
    
    // Convert params to URL encoded form data
    const formData = new URLSearchParams();
    Object.entries(apiParams).forEach(([key, value]) => {
      formData.append(key, String(value));
    });
    
    const response = await fetch(`${WHMCS_URL}/includes/api.php`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/x-www-form-urlencoded',
      },
      body: formData.toString(),
    });
    
    const data = await response.json();
    
    if (data.result === 'error') {
      throw new Error(data.message || 'Unknown API error');
    }
    
    return data;
  } catch (error) {
    console.error('WHMCS API Error:', error);
    throw error;
  }
};

/**
 * Generate a SSO token for a user using their email
 */
export const generateSsoToken = async (email: string): Promise<string | null> => {
  try {
    // Check if user exists in WHMCS first using GetClientsDetails action
    const clientCheck = await callWhmcsApi('GetClientsDetails', { email });
    
    // If client exists, generate an SSO token
    if (clientCheck.result === 'success') {
      const ssoResponse = await callWhmcsApi('CreateSsoToken', { 
        client_id: clientCheck.client_id,
        destination: 'clientarea' // Redirect to client area by default
      });
      
      if (ssoResponse.result === 'success' && ssoResponse.sso_token) {
        return `${WHMCS_URL}/oauth/sso.php?token=${ssoResponse.sso_token}`;
      }
    } else {
      // If client doesn't exist, return the registration URL
      return `${WHMCS_URL}/register.php?email=${encodeURIComponent(email)}`;
    }
    
    return null;
  } catch (error) {
    toast.error("Failed to generate SSO token");
    console.error('SSO Generation Error:', error);
    return null;
  }
};

/**
 * Create a client in WHMCS if they don't exist
 */
export const createOrUpdateClient = async (
  email: string, 
  fullName: string, 
  password: string
): Promise<boolean> => {
  try {
    // Parse full name into first name and last name
    const nameParts = fullName.split(' ');
    const firstName = nameParts[0];
    const lastName = nameParts.length > 1 ? nameParts.slice(1).join(' ') : '';
    
    // Check if client exists
    const clientCheck = await callWhmcsApi('GetClientsDetails', { email });
    
    if (clientCheck.result === 'success') {
      // Client exists, update their details
      await callWhmcsApi('UpdateClient', {
        client_id: clientCheck.client_id,
        firstname: firstName,
        lastname: lastName,
        email: email
      });
    } else {
      // Client doesn't exist, create new account
      await callWhmcsApi('AddClient', {
        firstname: firstName,
        lastname: lastName,
        email: email,
        password: password
      });
    }
    
    return true;
  } catch (error) {
    console.error('Client Creation Error:', error);
    return false;
  }
};
