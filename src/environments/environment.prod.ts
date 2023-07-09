// environment.prod.ts
export const environment = {
  production: true,
  auth: {
    clientID: '#{authClientID}#',
    domain: '#{authDomain}#',
  },
  apiEndpoint: '#{apiEndpoint}#',
};