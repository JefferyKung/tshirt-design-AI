# tshirt-design-AI-frontend
This is a fullstack application that you can try to design your own t-shirt by changing color, upload your own image, and even asking A.I. to do so!

https://tshirt-design-ai-frontend.vercel.app/


![image](https://github.com/JefferyKung/tshirt-design-AI-frontend/assets/102844561/4267570d-cc65-436d-a037-b1a2bf6bd94f)
![image](https://github.com/JefferyKung/tshirt-design-AI-frontend/assets/102844561/25a89f14-6c21-4d68-aed2-c748a294dfd1)
![image](https://github.com/JefferyKung/tshirt-design-AI-frontend/assets/102844561/84530dfe-b4bb-47b0-9c22-9f7c97900e54)




## How to download(frontend)?
git clone  
npm install  
npm run dev  

#### env file 
VITE_BACKEND_API= your backend api endpoint  

## backend side
#### source code
https://github.com/JefferyKung/TShirt-design-AI-backend

#### backend API  
https://tshirt-design-ai-backend.onrender.com

#### env file 
OPENAI_API_KEY= your openAI key  
#### endpoint
POST method on '${your base url}/api/v1/dalle'  

## Technic
#### front-end: React.js  
#### backend: Express.js  
#### styling: tailwindCSS  
#### openAI   (limited use amount because you submit prompt every time, I'll have to pay for it! )

https://platform.openai.com/docs/guides/images/introduction

## Features
1. Click on "customize it to the design page"  
2. Left side there are three different methods to desgin  
-- Color / File upload / open AI  
3. You can either apply your design on only logo or the whole shirt.  
4. There are two icons to toggle logo and the whole shirt style.  
