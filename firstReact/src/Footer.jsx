function Footer() {
    const year = new Date().getFullYear();

    return (
        <footer>
            <p>©️ {year} Naija Tech Hub. All rights reserved.</p>
        </footer>
    );
}

export default Footer;