import React, { Component} from 'react';

class Footer extends Component {
    render() {
        return (
        <div class="divfoot">
         
         <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/4.7.0/css/font-awesome.min.css"/>
         
         
         <footer class="footer bg-light">
             <div class="container">
                 <div class="footer-content">
                  
                     <a href="https://www.facebook.com/VotrePage" target="_blank" class="social-icon">
                         <i class="fa fa-facebook"></i>
                     </a>
                     
                     <a href="https://twitter.com/VotrePage" target="_blank" class="social-icon">
                         <i class="fa fa-twitter"></i>
                     </a>
                    
                     <a href="https://www.instagram.com/VotrePage" target="_blank" class="social-icon">
                         <i class="fa fa-instagram"></i>
                     </a>
                 </div>
                 <p class="p" > Droits d'auteur &copy; 2023 Mon Podcast </p>
             </div>
            
         </footer>
         </div>
        );
    }
    
}

export default Footer;