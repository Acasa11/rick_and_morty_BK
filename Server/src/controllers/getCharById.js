const URL = `https://rickandmortyapi.com/api/character`
const axios = require("axios")
// const API_KEY = "henrystaff"

const getCharById = (req, res) => {
    const { id } = req.params
    axios
        .get(`${URL}/${id}`)
        .then(({data}) => {
            const {
                id, status, name, origin, image, gender, location
            } = data;
            const character = {
                id, status, name, origin, image, gender, location
            }
            return character.name
                ? res.json(character)
                : res.status(404).send("Not Found")
        })
        .catch(error => {
            return res.status(500).send(error.message)
        })
}

module.exports = getCharById