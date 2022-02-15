import React, { useState } from 'react';
import { Button, ButtonGroup, Badge } from 'react-bootstrap';

const Pagejeu = () => {


    const listeMots = ["python", "javascript", "informatique"]
    const alphabet = "ABCDEFGHIJKLMNOPQRSTUVWXYZ".toUpperCase().split("")
         
    let mot_aleatoire = listeMots[Math.floor(Math.random() * listeMots.length)]
    // let mot_a_trouver = mot_aleatoire.replace(mot_aleatoire, '_')



    return (
        <>
            <Button variant="primary">
                    ESSAIS RESTANTS <Badge bg="secondary">8</Badge>
                    <span className="visually-hidden">unread messages</span>
             </Button>
             <p></p>
             <p></p>
             <p>{mot_aleatoire}</p>
             {
                alphabet.map((lettre, i)=>{
                    return (
                        <ButtonGroup key={"lettre_" + i+1} className="me-2" aria-label="First group">
                            <Button variant="outline-secondary">{lettre}</Button>
                        </ButtonGroup>
                    )
                })
            }
                
            
        </>
);

}

export default Pagejeu