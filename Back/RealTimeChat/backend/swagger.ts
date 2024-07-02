import swaggerAutogen from "swagger-autogen";

const doc = {
    info : {
        title : "My API",
        description : "Description"
    },
    host : "localhost:8000/api",
    schemes : ["http"],
    "x-cors" : {
        enabled : true,
        description : 
        "Cross-Origin Resource Sharing (CORS) is supported for this API.",
    },
};

const outputFile = "./swagger-output.json";
const endpointsFile = [".apis/routes/auth/index.ts"];

swaggerAutogen(outputFile, endpointsFile, doc);