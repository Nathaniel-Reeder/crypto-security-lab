const bcrypt = require('bcryptjs')
const users = []

module.exports = {
    login: (req, res) => {
      // console.log('Logging In User')
      // console.log(req.body)
      const { username, password } = req.body
      
      for (let i = 0; i < users.length; i++) {
        // console.log(users[i])
        const existingPWord = bcrypt.compareSync(password, users[i].password)
        if (users[i].username === username && existingPWord) {
          // console.log("your're in the if statement!")
          const secureUser = {...users[i]}
          delete secureUser.password
          // console.log(secureUser)
          return res.status(200).send(secureUser)
        }
      }
      res.status(400).send("User not found.")
    },
    register: (req, res) => {
        console.log('Registering User')
        console.log(req.body)

        const {username, email, firstName, lastName, password} = req.body

        const salt = bcrypt.genSaltSync(5)
        const pWordHash = bcrypt.hashSync(password, salt)

        let userObj = {
          password: pWordHash,
          username, 
          email,
          firstName,
          lastName
        }

        users.push(userObj)

        const secureUser = {...userObj}
        delete secureUser.password
        // console.log(users)
        res.status(200).send(secureUser)
    }
}