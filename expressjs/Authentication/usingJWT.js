import express from 'express'
import bcrypt from 'bcryptjs'
import JWT  from 'jsonwebtoken'

const app = express()
const PORT = 3000
app.use(express.json())

const users = []

app.post('/register',async (req,res)=>{
    const {username,password} = req.body
    const hashedPassword = await bcrypt.hash(password,10)

    users.push({
        username,
        password:hashedPassword
    })
    res.send("User Registered")
})  

app.post('/login', async (req, res) => {
  const { username, password } = req.body;
  const user = users.find(u => u.username === username);

  if (!user) {
    return res.status(401).send("User not found");
  }

  const checkPassword = await bcrypt.compare(password, user.password);
  if (!checkPassword) {
    return res.status(401).send("Incorrect password");
  }

  const token = JWT.sign({ username }, 'test#secret');
  res.json({ token });
});

app.get('/dashboard', (req, res) => {
  const token = req.header('Authorization')?.replace('Bearer ', '');

  if (!token) {
    return res.status(401).send('Access Denied. No token provided.');
  }

  try {
    const decodedToken = JWT.verify(token, 'test#secret');

    if (decodedToken.username) {
      return res.send(`Welcome ${decodedToken.username}`);
    } else {
      return res.status(403).send('Access Denied');
    }
  } catch (err) {
    return res.status(400).send('Invalid Token');
  }
});


app.listen(PORT,()=>{
    console.log('Running')
})