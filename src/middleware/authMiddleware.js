const jwt = require("jsonwebtoken");
const verifyToken=(req,res,next)=>{
    let token;
    let authHeader=req.headers.Authorization || req.headers.authorization;
    if (authHeader && authHeader.startsWith("Bearer")) {
        token=authHeader.split(" ")[1];
        if (!token) {
            return res.status(401).json({message:"Access Denied"});
    }
    try {
        const decoded=jwt.verify(token,process.env.JWT_SECRET);
        req.user=decoded;
        console.log("the decoded user is",req.user);
        next

    } catch (err){
        return res.status(401).json({message:"Invalid Token)"});
    }
}

  
};
module.exports=verifyToken;