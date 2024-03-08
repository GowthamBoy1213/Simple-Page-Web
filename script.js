function changeContent(page) {
	var contentDiv = document.getElementById('content');

	switch (page) {
		case 'home':
			contentDiv.innerHTML = `
				
				<h2>
					Welcome to the Home Page!
				</h2>
				<p>
					This is a main page.
				</p>
				<p>
                Passionate frontend developer specializing in pixel-perfect web design.
				</p>
			`;
			break;
		case 'about':
			contentDiv.innerHTML = `
				<h2>About Us</h2>
				<p>
					This is the about page content.
                    
				</p>
                <p> Hi, I am Gowtham and I work as a web developer.</p1>
				<p>
                I am a software engineer who loves to create websites as well as apps for people. 
				</p>
			`;
			break;
		case 'contact':
			contentDiv.innerHTML = 
				`<h2>Contact Us</h2> 
				<p>
                Fill in The Forms Reach Out to us!
				</p> 
				<form> 
				<label for="name">Name:</label> 
				<input type="text" id="name" name="name" 
						placeholder="Your Name" required>
				<label for="email">Email:</label> 
				<input type="email" id="email" name="email" 
						placeholder="Your Email" required>
				<label for="message">Message:</label> 
				<textarea id="message" name="message" 
							placeholder="Your Message" 
							rows="4" required>
					</textarea>
				<button type="submit">Send Message</button> 
				</form>`;
			break;

		
	}
}
