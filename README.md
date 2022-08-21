
# Prueba Tecnica

Este ejercicio fue resuelto usando node js con typescript, se uso jest y supertest como framework para las pruebas unitarias




## Installation

para correr este proyecto seguir los siguientes pasos

- clonarlo y ingresar a la carpeta
```bash
  git clone https://github.com/jbpita/Prueb-Tecnica-EasyBroker.git
  cd jbpita/Prueb-Tecnica-EasyBroker
```
 - instalar dependecias del proyecto

```bash
  npm install
```

- levantar el proyecto 

```bash
  npm run dev
```
    
- probar el EndPoint ( desde su navegador, o algun cliente como postman o insomia)
  http://localhost:4000/api
## API Reference

#### Get all titles

```http
  GET /api
```

| Parameter | Type     | Description                |
| :-------- | :------- | :------------------------- |
| `any` | `string` | `return all titles of the properties` | 



