if(!process.env.DB){
    throw new Error("MongoDB URI Not found");
}