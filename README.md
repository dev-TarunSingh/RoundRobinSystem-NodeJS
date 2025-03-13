# MCoupon

MCoupon is a Round-Robin Coupon Distribution System where users can share their coupons and claim one in return. Join a community where everyone helps each other save more and get exclusive deals while making a difference!

## How i solved it:



## Setup Instructions

1. **Clone the repository:**
   ```sh
   git clone https://github.com/dev-tarunsingh/MCoupon.git
   cd MCoupon
   ```

2. **Install dependencies:**
   ```sh
   npm install
   ```

3. **Set up environment variables:**
   Create a `.env` file in the root directory and add the following variables:
   ```env
   PORT=3000
   DATABASE_URL=your_database_url
   ```

4. **Run the application:**
   ```sh
   npm start
   ```

5. **Access the application:**
   Open your browser and go to `http://localhost:3000`

## Abuse Prevention Strategies

To prevent abuse and ensure fair usage of the coupon distribution system, the following strategies have been implemented:

1. **Rate Limiting:**
   Users are limited to claiming only one coupon within a specified time frame (e.g., 1 hour) to prevent excessive claims.

2. **IP Tracking:**
   Each user's IP address is recorded from request using request-ip. upon claiming a coupon, restricting subsequent claims from the same IP within the specified time frame.

3. **Cookie Tracking:**
   Cookies are used to monitor coupon claims from the same browser session, ensuring that users cannot claim multiple coupons by refreshing the page.

4. **User Authentication:**
   Users must be authenticated before they can share or claim coupons, ensuring that each action is tied to a verified user account.


## Deployment

To deploy the application to a live web server, follow these steps:

1. **Choose a hosting provider:**
   Select a hosting provider that supports Node.js applications (e.g., Heroku, Vercel, AWS).

2. **Set up the environment variables:**
   Ensure that the environment variables (`PORT`, `DATABASE_URL`) are correctly configured on the hosting platform.

3. **Deploy the application:**
   Follow the hosting provider's instructions to deploy the application. For example, if using Heroku:
   ```sh
   heroku create
   git push heroku main
   heroku config:set PORT=3000 DATABASE_URL=your_database_url
   ```

4. **Access the live application:**
   


