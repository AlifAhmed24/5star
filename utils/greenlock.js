import greenlock from '@root/greenlock-express';
import express from 'express'
const app = express();

// Initialize Greenlock with your configuration
export const greenlock = greenlock({
  // Let's Encrypt v2 is ACME draft 11
  version: 'draft-11',
  
  // The email address for renewals and issues
  email: 'your-email@example.com',
  
  // Whether or not to agree to the ACME server's terms of service
  agreeTos: true,
  
  // The domain names to renew the certificate for
  domains: ['example.com', 'www.example.com'],
  
  // The directory where Let's Encrypt stores its data
  configDir: '/etc/letsencrypt',
  
  // The webserver adapter to use
  server: 'https://acme-v02.api.letsencrypt.org/directory',
  
  // Whether or not to automatically register new accounts
  // NOTE: Only use this in development environments!
  // This option should be removed or set to 'false' when
  // deploying to production.
  debug: true,
  
  // The app to be secured with SSL/TLS
  app
});
