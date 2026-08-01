body {
    margin: 0;
    font-family: Arial;
    background: #0f172a;
    color: white;
}

/* NAVBAR */
.navbar {
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 15px;
    background: #1e293b;
}

.logo {
    font-size: 20px;
    font-weight: bold;
}

#search {
    padding: 8px;
    width: 250px;
}

#filter {
    padding: 8px;
}

/* HERO */
.hero {
    text-align: center;
    padding: 40px;
    background: linear-gradient(90deg, #6a11cb, #2575fc);
}

/* CATEGORIES */
.categories {
    text-align: center;
    padding: 20px;
}

.categories button {
    margin: 5px;
    padding: 10px;
    background: #8b5cf6;
    border: none;
    color: white;
    cursor: pointer;
}

/* CARDS */
.recipes {
    display: flex;
    flex-wrap: wrap;
    justify-content: center;
    gap: 20px;
}

.card {
    background: #1e293b;
    padding: 15px;
    border-radius: 10px;
    width: 250px;
    text-align: center;
}

.card img {
    width: 100%;
    border-radius: 10px;
}

.card button {
    margin: 5px;
    padding: 8px;
    border: none;
    background: #3b82f6;
    color: white;
    cursor: pointer;
}

/* MODAL */
.modal {
    display: none;
    position: fixed;
    width: 100%;
    height: 100%;
    background: rgba(0,0,0,0.7);
}

.modal-content {
    background: #1e293b;
    margin: 10% auto;
    padding: 20px;
    width: 50%;
}

.close {
    float: right;
    cursor: pointer;
}

/* FOOTER */
footer {
    text-align: center;
    padding: 15px;
    background: #1e293b;
    margin-top: 20px;
}
