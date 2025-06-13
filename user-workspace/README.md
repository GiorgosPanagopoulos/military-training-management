# Personnel Training Management System

Ένα σύστημα διαχείρισης εκπαιδεύσεων προσωπικού με React και Node.js.

## Τεχνολογίες

### Frontend
- React
- React Router για routing
- Axios για API calls
- CSS για styling

### Backend
- Node.js
- Express.js
- MongoDB με Mongoose
- JWT για authentication

## Εγκατάσταση

1. Κλωνοποιήστε το repository
2. Εγκαταστήστε τις εξαρτήσεις:
   ```bash
   npm install
   ```
3. Δημιουργήστε ένα .env αρχείο με τις απαραίτητες μεταβλητές:
   ```
   PORT=5000
   MONGO_URI=mongodb://localhost:27017/personnel-training-db
   JWT_SECRET=your-secret-key-here
   ```
4. Βεβαιωθείτε ότι έχετε εγκατεστημένη και τρέχει η MongoDB

## Εκτέλεση

Για development:
```bash
npm run dev
```

Αυτό θα ξεκινήσει:
- Backend στο http://localhost:5000
- Frontend στο http://localhost:3000

## Λειτουργίες

1. Διαχείριση Προσωπικού
   - Προσθήκη/επεξεργασία/διαγραφή προσωπικού
   - Ανάθεση σε υπηρεσίες

2. Διαχείριση Υπηρεσιών
   - Προσθήκη/επεξεργασία/διαγραφή υπηρεσιών
   - Παρακολούθηση προσωπικού ανά υπηρεσία

3. Διαχείριση Εκπαιδεύσεων
   - Δημιουργία/επεξεργασία/διαγραφή εκπαιδεύσεων
   - Καταγραφή διάρκειας και τύπου εκπαίδευσης

4. Παρακολούθηση Εκπαιδεύσεων Προσωπικού
   - Ανάθεση εκπαιδεύσεων σε προσωπικό
   - Καταγραφή ολοκλήρωσης και βαθμολογίας
   - Παρακολούθηση προόδου

5. Authentication
   - Login/Logout
   - Προστασία routes
   - JWT tokens

## Project Structure

```
src/
├── backend/
│   ├── controllers/    # Business logic
│   ├── models/        # Database models
│   ├── routes/        # API routes
│   ├── services/      # Service layer
│   └── app.js         # Express app
├── components/        # React components
├── pages/            # React pages
├── services/         # Frontend services
└── App.js            # Main React component
```

## API Endpoints

### Authentication
- POST /api/auth/login

### Personnel
- GET /api/personnel
- POST /api/personnel
- PUT /api/personnel/:id
- DELETE /api/personnel/:id

### Services
- GET /api/services
- POST /api/services
- PUT /api/services/:id
- DELETE /api/services/:id

### Trainings
- GET /api/trainings
- POST /api/trainings
- PUT /api/trainings/:id
- DELETE /api/trainings/:id

### Personnel Trainings
- GET /api/personnelTrainings
- POST /api/personnelTrainings
- PUT /api/personnelTrainings/:id
- DELETE /api/personnelTrainings/:id
