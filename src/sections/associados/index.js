import * as Yup from 'yup';
import { useState } from 'react';
import InputMask from 'react-input-mask';
import { useNavigate } from 'react-router-dom';
import Form from 'react-bootstrap/Form';
import {getTenant_id,getAcessToken} from '../../utils/services/auth'
// material
import { Stack, TextField, FormControl} from '@mui/material';
import { LoadingButton } from '@mui/lab';
// component
import axios from 'axios'
// ----------------------------------------------------------------------

export default function NewwAssociados() {



  return (
    <FormControl >
      <form autoComplete="off" noValidate >
        <Stack spacing={3}>

          <Stack direction={{ xs: 'column', sm: 'row' }} spacing={2}>
            <TextField
              fullWidth
              required
              autoComplete="username"
              type="text"
              label="Nome Completo"
            />
            <TextField
              fullWidth
              required
              autoComplete="username"
              type="text"
              label="Nome Artistico"
            />
          </Stack>

          <Stack direction={{ xs: 'column', sm: 'row' }} spacing={2}>
            <TextField
                  fullWidth
                  required
                  autoComplete="username"
                  type="text"
                  label="CPF/CNPJ"
            />
             <TextField
                  fullWidth
                  required
                  autoComplete="username"
                  type="data"
                  label="Data de Nascimento"


                 
            />

          </Stack>
      
          <TextField
                fullWidth
                required
                autoComplete="username"
                type="email"
                label="Email address"

            
              
          />
            <TextField
                fullWidth
                autoComplete="username"
                type="email"
                label="Email address (opcional)"

            
              
          />

          <Stack direction={{ xs: 'column', sm: 'row' }} spacing={2}>
              <TextField
                fullWidth
                autoComplete="username"
                type="text"
                label="Rua"

              />

              <TextField
                fullWidth
                autoComplete="username"
                type="number"
                label="Numero"

              />

            <TextField
                fullWidth
                autoComplete="username"
                type="number"
                label="cep"

              />

         
          </Stack>
          <Stack direction={{ xs: 'column', sm: 'row' }} spacing={2}>
              <TextField
                fullWidth
                autoComplete="username"
                type="text"
                label="Cidade (Opcional)"
              />

              <TextField
                fullWidth
                autoComplete="username"
                type="text"
                label="Uf (Opcional)"
              />

              <TextField
                fullWidth
                autoComplete="username"
                type="text"
                label="Pais (Opcional)"
              />
          </Stack>
          <Stack direction={{ xs: 'column', sm: 'row' }} spacing={2}>
              <TextField
                fullWidth
                required
                autoComplete="username"
                type="text"
                label="Telefone"
              />

            <TextField
                fullWidth
                required
                autoComplete="username"
                type="text"
                label="Telefone"
              />
               
          </Stack>


       
          <Stack direction={{ xs: 'column', sm: 'row' }} spacing={2}>
      

            <Form.Control
              as={InputMask}
              mask="99-99"
              placeholder="Digite se CPF"

            />
          </Stack>

   

          <LoadingButton fullWidth size="large" type="submit" variant="contained" >
            Registrar
          </LoadingButton>
        </Stack>
      </form>
    </FormControl>
  );
}


























































