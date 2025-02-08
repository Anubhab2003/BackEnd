import mongoose from 'mongoose';

const todoSchema=new mongoose.Scheme({
  content:{
    type:String,
    required:true,
  },
  complete:{
    type:boolean,
    default:false
  },
  createBy:{
    type:mongoose.Schema.Types.ObjectId,//SPECIAL TYPE
    ref:"User"
  },
  subTodos:[{
    type:mongoose.Schema.Types.ObjectId,
    ref:"SubTodo"
  }]//Array of sub todos
},{timestamps:true});

export const Todo=mongoose.model("Todo",todoSchema)