// shared-footer.service.ts
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class SharedFooterService {
  getFooterContent(): string {
    // Return the shared footer HTML content
    return `
<footer class="footer_section">
  <div class="container">
    <div class="row">
      <div class="col-md-4 footer-col">
        <div class="footer_contact">
          <h4>
            Contact Us
          </h4>
          <div class="contact_link_box">
            <a href="">
              <i class="fa fa-map-marker" aria-hidden="true"></i>
              <span>
                  Location
                </span>
            </a>
            <a href="">
              <i class="fa fa-phone" aria-hidden="true"></i>
              <span>
                  Call +01 1234567890
                </span>
            </a>
            <a href="">
              <i class="fa fa-envelope" aria-hidden="true"></i>
              <span>
                  flavorframe@gmail.com
                </span>
            </a>
          </div>
        </div>
      </div>
     <div class="col-md-4 footer-col">
    <div class="footer_detail">
        <a href="" class="footer-logo">
            FlavorFrame
        </a>
        <p>
            At FlavorFrame, we cherish the opportunity to stay connected with our wonderful community. Join us on social media for the latest updates, mouthwatering food pics, and exclusive offers!
        </p>
        <div class="footer_social">
            <a role="button">
                <img src="assets/images/facebook.png" width="32" height="32" alt="Facebook">
            </a>

            <a href="#">
                <img src="assets/images/twitter.png" width="32" height="32" alt="Twitter">
            </a>

            <a href="#">
                <img src="assets/images/whatsapp.png" width="32" height="32" alt="WhatsApp">
            </a>

            <a href="#">
                <img src="assets/images/instagram.png" width="34" height="34" alt="Instagram">
            </a>
        </div>
    </div>
</div>

      <div class="col-md-4 footer-col">
        <h4>
          Opening Hours
        </h4>
        <p>
          Everyday
        </p>
        <p>
          10.00 Am -10.00 Pm
        </p>
      </div>
    </div>
  </div>
</footer>
    `;
  }
}
