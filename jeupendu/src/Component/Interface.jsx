import React from 'react';
import { Button } from 'react-bootstrap'
import { Link } from 'react-router-dom'
const Interface = () => {
    return (
        <div>
            <h1>Jeu du Pendu</h1>

            <Button variant="outline-success" as = {Link} to = "/jeu">Jouer</Button>
        </div>
    );
};

export default Interface;