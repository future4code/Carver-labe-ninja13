import React, { Component } from 'react';
import { AppContainer } from "./AppContainer";


function FormularioCadastro() {
    return (
      <div>
          <h1>Etapa 1 - Dados Gerais</h1>
          <form action ="">
              <div class = "campo-nome">
                  <label for ="nome"> Qual é o seu nome?</label>
                  <input type = "text" name = "nome" id = "nome"/>
              </div>
              <div class = "campo-idade">
                  <label for = "idade"> Qual é a sua idade?</label>
                  <input type = "numer" name = "idade" id = "idade"/>
              </div>
              <div class = "campo-email">
                  <label for = "email">Qual é o seu email?</label>
                  <input type = "email" name = "email" id = "email"/>
              </div>
              <div class = ""campo-escolaridade>
                  <select>
                      <option value = "Ensino médio incompleto">Ensino médio incompleto</option>
                      <option value = "Ensino médio completo">Ensino médio completo</option>
                      <option value = "Ensino superio incompleto">Ensino superior incompleto</option>
                      <option value = "Ensino superior completo">Ensino superior completo</option>
                  </select>
  
              </div>
              <br></br>
              
          </form>
      </div>
    );
  }
  
  export default FormularioCadastro;