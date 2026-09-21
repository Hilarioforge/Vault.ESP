// Configuração do projeto Firebase exclusivo do Vault (vault-espana).
export const firebaseConfig = {
  apiKey: "AIzaSyBeY7TI7EXfczqB3Pe9Ecs_pwEcEMir_Ho",
  authDomain: "vault-espana.firebaseapp.com",
  projectId: "vault-espana",
  storageBucket: "vault-espana.firebasestorage.app",
  messagingSenderId: "118884172551",
  appId: "1:118884172551:web:1a52bb5e1b536d1ef2bba2"
};

export const firebaseConfigured = !Object.values(firebaseConfig).some(value => /COLE_|SEU_PROJETO/.test(value));
