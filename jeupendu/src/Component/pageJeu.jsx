import React, { useState } from 'react';
import { Button, ButtonGroup, Badge } from 'react-bootstrap';

const Pagejeu = () => {


    const listeMots = ["python", "javascript", "informatique"]
    const alphabet = "ABCDEFGHIJKLMNOPQRSTUVWXYZ".toUpperCase().split("")
         


    return (
        <>
            <Button variant="primary">
                    ESSAIS RESTANT <Badge bg="secondary">9</Badge>
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