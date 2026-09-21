# Configuración de Vault para producción

Vault debe usar un proyecto Firebase exclusivo para separar usuarios, datos, reglas y facturación.

## Firebase

1. Crea un proyecto y registra una aplicación web.
2. Copia sus datos en `firebase-config.js`.
3. Activa Correo/contraseña, Google y, si se ofrece, Apple en Authentication.
4. Crea Firestore en modo producción y elige una región adecuada para España y la protección de datos.
5. Instala Firebase CLI, inicia sesión y publica reglas, funciones y hosting.

Los datos se guardan bajo `/users/{uid}`; las reglas solo permiten acceso al UID autenticado. La función `deleteVaultAccount` elimina los datos y el usuario de Authentication.

## Antes de vender

- Completa y revisa jurídicamente `termos.html` y `privacidade.html` conforme al RGPD, LOPDGDD y normativa de consumo.
- Define dominio, correo de soporte, precio, facturación y cancelación.
- Activa alertas de presupuesto, App Check y controles contra abuso.
- Prueba registro, recuperación, Google, Apple, eliminación y aislamiento con cuentas distintas.
- Documentación Google: https://firebase.google.com/docs/auth/web/google-signin
- Documentación Apple: https://firebase.google.com/docs/auth/web/apple
