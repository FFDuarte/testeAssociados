
import * as Yup from 'yup';
import { useEffect, useState } from 'react';
import InputMask from 'react-input-mask';
import { useNavigate } from 'react-router-dom';
import Form from 'react-bootstrap/Form';
// material
import { Stack, TextField, FormControl} from '@mui/material';
import { LoadingButton } from '@mui/lab';
// component
import axios from 'axios'

export default function NewwAssociados(associado) {


  


  return (
    <FormControl >
      <form autoComplete="off" noValidate >
        <Stack spacing={3}>

          <Stack direction={{ xs: 'column', sm: 'row' }} spacing={2}>
            <TextField
                fullWidth
                type="text"
             
            />
            <TextField
              fullWidth
              type="text"
            
            />
          </Stack>

          <Stack direction={{ xs: 'column', sm: 'row' }} spacing={2}>
            <TextField
                  fullWidth
                  required
                  autoComplete="username"
                  type="text"
            />
             <TextField
                  fullWidth
                  required
                  autoComplete="username"
                  type="data"
              
                 
            />

          </Stack>
      
          <TextField
                fullWidth
                required
                autoComplete="username"
                type="email"
          
              
          />
            <TextField
                fullWidth
                autoComplete="username"
                type="email"
            
              
          />

          <Stack direction={{ xs: 'column', sm: 'row' }} spacing={2}>
              <TextField
                fullWidth
                autoComplete="username"
                type="text"
            
              />

              <TextField
                fullWidth
                autoComplete="username"
                type="number"
           
              />

            <TextField
                fullWidth
                autoComplete="username"
                type="number"
             
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

