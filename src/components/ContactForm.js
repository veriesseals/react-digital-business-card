import React from "react"

function ContactForm(){
    return(
        <div>
            <div class="container">
                <div class="row">
                    <div class="col-md-8 mx-auto">
                        <div class="contact-form">
                            <form id="contact-form" method="post" action="#">
                                <div class="form-group">
                                    <label for="name">Name</label>
                                    <input type="text" class="form-control" id="name" name="name" placeholder="Enter your name"/>
                                </div>
                                <div class="form-group">
                                    <label for="email">Email</label>
                                    <input type="email" class="form-control" id="email" name="email" placeholder="Enter your email"/>
                                </div>
                                <div class="form-group">
                                    <label for="message">Message</label>
                                    <textarea class="form-control" rows="5" id="message" name="message" placeholder="Enter your message"></textarea>
                                </div>
                                <button type="submit" class="btn btn-primary">Send Message</button>
                            </form>
                            <div id="success-message" style="display: none;">
                                <p>Message sent successfully!</p>
                            </div>
                        </div>
                    </div>
                </div>
	</div>  

            <script>
                $(document).ready(function(){
                    $('#contact-form').submit(function(e){
                        e.preventDefault();
                        var name = $('#name').val();
                        var email = $('#email').val();
                        var message = $('#message').val();
                        $.ajax({
                            type: "POST",
                            url: "YOUR_SERVER_URL_HERE", // Change this to your server URL
                            data: {
                                name: name,
                                email: email,
                                message: message
                            },
                            success: function(){
                                $('#success-message').fadeIn();
                                $('#contact-form')[0].reset();
                            }
                        })
                    })
                })
            </script>
        </div>
    )

}

export default ContactForm;