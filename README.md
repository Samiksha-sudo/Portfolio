# Portfolio

My first personal portfolio site, built in early 2025: a React front end with a small Express back end that delivers contact-form messages by email.

> My current portfolio lives at https://mycreportfolio.com/samiksha. This repository is the earlier version.

## Tech stack

- **Front end:** React (Create React App), Material UI
- **Back end:** Node.js, Express, Nodemailer

## Structure

```
portfolio/   React app
backend/     Express server (Server.js, routes/contactRoutes.js)
```

## Run locally

```bash
# back end (listens on port 9000 in the front end config)
cd backend
npm install
npm start

# front end
cd portfolio
npm install
npm start
```

The contact form posts to `POST /sendMail`. Create a `.env` in `backend/` with your own mail credentials (see `contactRoutes.js` for the variable names). Never commit it.

The front end reads the API address from `portfolio/src/config/Url.js` (currently `http://localhost:9000`).

## Notes

This is a learning project and is not actively maintained.
