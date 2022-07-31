const Users = require("../models/usersModel");
const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");
const SECRET = process.env.SECRET;

const newUser = (req, res) => {
    const passwordWithHash = bcrypt.hashSync(req.body.password, 10);
    req.body.password = passwordWithHash;
    const user = new Users(req.body);
    user.save(function (err) {
        if (err) {
            res.status(500).send({
                message: err.message
            });
        }
        res.status(201).send(user);
    });
};


// const registerNewCandidata = async (req, res) => {
  
//     const  { email, password } = req.body
  
//     if (!email || !password) {
//       return res.status(422).send({
//         message: 'Invalid payload',
//       });
//     }
  
//     const encryptedPassword = await bcrypt.hash(req.body.password, 10);
  
//     req.body.password = encryptedPassword;
//     const newCandidata = new candidatasModel(req.body);
  
//     try {
//       await newCandidata.save();
  
//       res.status(201).send({
//         message: "Candidata cadastrada com sucesso!",
//         candidata: newCandidata,
//       });
//     } catch (err) {
//       res.status(424).send({ message: err.message })
//     }
//   };
  

const allUsers = (req, res) => {
    Users.find(function (err, users) {
        if (err) {
            res.status(500).json({
                message: error.message
            });
        }
        res.status(200).send(users);
    });
};


// const alterarCandidatas = (req, res) => {
//     const token = auth(req, res);
//     jwt.verify(token, SECRET, (err) => {
//       if (err) {
//         return res.status(403).send("Token inválido!");
//       }
//       const id = req.params.id;
//       const updateCandidata = req.body;
//       candidatasModel.findByIdAndUpdate(id, updateCandidata, (err, candidata) => {
//         if (err) {
//           return res.status(424).send({ message: err.message });
//         } else if (candidata) {
//           return res.status(200).send("Atualizado com sucesso!");
//         }
//         res.status(404).send("Registro não encontrado");
//       });
//     });
//   };
  

const deleteUser = async (req, res) => {
    try {
        const {
            id
        } = req.params;
        await Users.findByIdAndDelete(id);
        const message = `Usuário com o ID ${id} foi deletado!`;
        res.status(200).json({
            message
        });
    } catch (error) {
        console.error(error);
        res.status(500).json({
            message: error.message
        });
    }
};



// const deletarCandidata = (req, res) => {
//     const token = auth(req, res);
//     jwt.verify(token, SECRET, (err) => {
//       if (err) {
//         return res.status(403).send("Token inválido!");
//       }
//       const params = req.query;
//       candidatasModel.deleteMany(params, (err, candidata) => {
//         if (err) {
//           return res.status(424).send({ message: err.message });
//         } else if (candidata) {
//           return res.status(200).send("Removide com sucesso!");
//         }
//         res.status(404).send("Registro não encontrado!");
//       });
//     });
//   };


const login = (req, res) => {
    Users.findOne({
        email: req.body.email
    }, function (error, user) {
        if (error) {
            return res.status(500).send({
                message: "Header não encontrado"
            });
        }
        if (!user) {
            return res.status(404).send(`Não há usuário cadastrado com o e-mail: ${email}`);
        }
        const validPassword = bcrypt.compareSync(req.body.password, user.password);
        if (!validPassword) {
            return res.status(403).send("Senha incorreta. Tente novamente.");
        }
        const token = jwt.sign({
            email: req.body.email
        }, SECRET);
        return res.status(200).send(token);
    });
};


// const login = (req, res) => {
//     candidatasModel.findOne({ email: req.body.email }, (err, candidata) => {
//     if (err) {
//       return res.status(500).send({ message: err.message });
//     };
//     if (!candidata) {
//       return res.status(404).send('Não existe candidata cadastrada com esse email');
//     };

//     const password = bcrypt.compareSync(req.body.password, candidata.password);
//     if (!password) {
//       return res.status(403).send('Acesso negado: senha incorreta');
//     };

//     const token = jwt.sign({ email: candidata.email }, SECRET);
//     return res.status(200).send( { token:token, candidata } );
//   });
// };




module.exports = {
    newUser,
    allUsers,
    login,
    deleteUser,
};