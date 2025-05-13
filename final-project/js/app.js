/* Reset and General Styles */
* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}

body {
  font-family: Arial, sans-serif;
  line-height: 1.6;
  color: #333;
  background: #f4f4f4;
}

.container {
  max-width: 1200px;
  margin: 0 auto;
  padding: 0 1rem;
}

/* Header Styling */
header {
  background-color: #333;
  padding: 0.5rem 0;
  text-align: center;
}

/* Logo Styling */
.logo {
  width: 100%;
  max-height: 100px;
  object-fit: contain;
  display: block;
}

/* Navigation Styling */
.container nav ul {
  display: flex;
  justify-content: center;
  list-style: none;
  gap: 1rem;
  margin: 1rem 0;
}

.container nav ul li a {
  color: #fff;
  text-decoration: none;
  font-weight: bold;
}

.container nav ul li a:hover {
  color: #f4a261;
}

/* Hero Section */
.hero {
  background: url('assets/img/hero.jpg') no-repeat center center/cover;
  color: #000;
  text-align: center;
  padding: 4rem 1rem;
  text-shadow: 2px 2px 4px rgba(0, 0, 0, 0.3);
}

.hero h1 {
  font-size: 2.5rem;
  margin-bottom: 1rem;
}

.hero p {
  font-size: 1.2rem;
}

/* Section Titles */
h2 {
  text-align: center;
  margin-bottom: 2rem;
  font-size: 2rem;
  color: #333;
}

/* Services Section */
.services .grid {
  display: flex;
  gap: 1.5rem;
  flex-wrap: wrap;
  justify-content: center;
}

.services .card {
  background: #fff;
  border-radius: 8px;
  box-shadow: 0 2px 5px rgba(0, 0, 0, 0.1);
  overflow: hidden;
  max-width: 300px;
  text-align: center;
}

.services .card img {
  width: 100%;
  height: auto;
}

.services .card h3 {
  margin: 1rem 0;
  font-size: 1.5rem;
  color: #333;
}

.services .card p {
  padding: 0 1rem 1rem;
  color: #666;
}

/* Gallery Section */
.gallery .grid {
  display: flex;
  gap: 1.5rem;
  flex-wrap: wrap;
  justify-content: center;
}

.gallery img {
  max-width: 300px;
  border-radius: