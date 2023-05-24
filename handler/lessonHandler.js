const httpStatus = require("http-status");
const Response = require("../model/Response");
const Lesson = require("../model/Lesson");


const getAllLesson = async (req, res) => {
    let response = null;
    try {
      const lessons = await Lesson.find();
  
      response = new Response.Success(false, "success", lessons);
      res.status(httpStatus.OK).json(response); 
    } catch (error) {
      response = new Response.Error(true, error.message);
      res.status(httpStatus.BAD_REQUEST).json(response);
    }
  };

  const getLesson = async (req, res) => {
    let response = null;
    const idParams = req.params._id
    // const idQuery = req.query._id
    try {
      const lessons = await Lesson.findOne({'_id': idParams});

      if(!lessons){
        response = new Response.Error(true, "Lesson Tidak Ketemu");
        res.status(httpStatus.BAD_REQUEST).json(response);
        return;
      }

      response = new Response.Success(false, "success", lessons);
      res.status(httpStatus.OK).json(response); 
    } catch (error) {
      response = new Response.Error(true, error.message);
      res.status(httpStatus.BAD_REQUEST).json(response);
    }
  };

  module.exports = { getAllLesson,getLesson };