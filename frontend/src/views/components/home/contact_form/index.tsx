import React, { useState } from 'react';
import styles from './contact_form.module.css'
import { Typography } from '@mui/material';
import { Button } from '@mui/material';
import { NavLink } from 'react-router-dom';
import MakeAppointmentForm from '../../make_appointment_from'

const ContactForm = () => {
  const [open, setOpen] = useState<boolean>(false);

  const handleClick = () => {
    setOpen(true);
  };

  return (
    <div className={styles.main}>

      <div>
        <Typography gutterBottom variant="h3" sx={{ color: 'rgba(8, 44, 77, 1)', marginBottom: 3 }}>Наша клиника —<br />ваш надёжный партнёр<br />на пути к здоровью!</Typography>
        <Typography gutterBottom variant="h6" sx={{ color: 'rgba(137, 155, 181, 1)', marginBottom: 6 }}>Ваше здоровье - наша миссия. Доверьтесь профессионалам!</Typography>

        <div className={styles.button__container}>
          <Button onClick={handleClick} className={styles.button} style={{ backgroundColor: 'rgba(19, 84, 147, 1)' }} variant="contained">Записаться на прием</Button>
          <NavLink to="/page-not-found" color="inherit">
            <Button className={styles.button} variant="outlined">Консультация</Button>
          </NavLink>
        </div>

      </div>

      <div>
        <img src="/images/doctors.png" height={500} />
      </div>
      
      <MakeAppointmentForm open={open} setOpen={setOpen} />
    </div>
  );
}

export default ContactForm;