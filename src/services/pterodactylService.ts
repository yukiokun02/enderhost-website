
import { toast } from "sonner";

const API_TOKEN = 'ptla_eDMsI7y4XRSHCfjbpQfYjqzmcjHQ0YrBvu6zQ8N6XMB';
const API_URL = 'https://panel.enderhost.in:443/api';

export interface ServerDetails {
  name: string;
  plan: {
    name: string;
    ram: number;
    cpu: number;
    disk: number;
    price: number;
  };
  userId?: string;
}

export const createMinecraftServer = async (serverDetails: ServerDetails, userEmail: string) => {
  try {
    console.log("Creating server with details:", { serverDetails, userEmail });
    
    // In a real implementation, you would make an API call to Pterodactyl here
    const response = await fetch(`${API_URL}/application/servers`, {
      method: 'POST',
      headers: {
        'Authorization': `Bearer ${API_TOKEN}`,
        'Content-Type': 'application/json',
        'Accept': 'application/json',
      },
      body: JSON.stringify({
        name: serverDetails.name,
        user: userEmail,
        egg: 1, // Minecraft egg ID
        docker_image: 'ghcr.io/pterodactyl/yolks:java_17',
        startup: 'java -Xms128M -Xmx{{SERVER_MEMORY}}M -jar server.jar',
        environment: {
          MINECRAFT_VERSION: 'latest',
          SERVER_JARFILE: 'server.jar',
          BUILD_NUMBER: 'latest'
        },
        limits: {
          memory: serverDetails.plan.ram,
          swap: 0,
          disk: serverDetails.plan.disk,
          io: 500,
          cpu: serverDetails.plan.cpu
        },
        feature_limits: {
          databases: 1,
          backups: 1,
          allocations: 1
        },
        allocation: {
          default: 1
        }
      }),
    });

    if (!response.ok) {
      const errorData = await response.json();
      console.error("Server creation error:", errorData);
      throw new Error(errorData.message || 'Failed to create server');
    }

    const data = await response.json();
    console.log("Server created successfully:", data);
    return data;
  } catch (error) {
    console.error('Error creating Minecraft server:', error);
    toast.error('Failed to create Minecraft server');
    throw error;
  }
};
