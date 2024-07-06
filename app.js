const express = require('express');
const app = express();
const userRoutes = require('./routes/userRoutes');

app.set('view engine', 'ejs');
app.use(express.static('public'));
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.use('/users', userRoutes);
app.get("/home",(req,res) =>{
  res.json("success",)
})
const PORT = process.env.PORT || 3123;
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});