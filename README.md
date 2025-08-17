# Imagify - AI Text-to-Image Generator

Transform your imagination into stunning visuals with the power of artificial intelligence. Imagify is a modern web application that converts text descriptions into high-quality images in seconds.

## ✨ Features

- **AI-Powered Generation**: Convert text descriptions to unique images using advanced AI technology
- **Credit-Based System**: Flexible pricing with different credit packages for various use cases
- **User Authentication**: Secure login system with JWT tokens
- **Modern UI/UX**: Beautiful, responsive interface with smooth animations using Framer Motion
- **Real-time Processing**: Generate images in seconds with the ClipDrop API
- **Download & Share**: Instantly download your creations or share them directly

## 🎯 Use Cases

- **Content Creators**: Generate custom visuals for social media, blogs, and marketing
- **Graphic Designers**: Quickly prototype ideas and create concept art
- **Businesses**: Create custom imagery for presentations, branding, and marketing materials
- **Personal Projects**: Bring creative ideas to life without design skills
- **Developers**: Generate unique visuals for applications and portfolios

## 🚀 Tech Stack

### Frontend
- **React 19** - Modern React with latest features
- **Vite** - Fast build tool and development server
- **Tailwind CSS** - Utility-first CSS framework
- **Framer Motion** - Smooth animations and transitions
- **React Router** - Client-side routing
- **Axios** - HTTP client for API calls

### Backend
- **Node.js** - JavaScript runtime
- **Express.js** - Web application framework
- **MongoDB** - NoSQL database with Mongoose ODM
- **JWT** - JSON Web Tokens for authentication
- **bcrypt** - Password hashing
- **Razorpay** - Payment gateway integration

## 📦 Installation

### Prerequisites
- Node.js (v18 or higher)
- MongoDB database
- ClipDrop API key

### Setup Instructions

1. **Clone the repository**
   ```bash
   git clone <repository-url>
   cd Imagify
   ```

2. **Install dependencies**
   ```bash
   # Install server dependencies
   cd server
   npm install
   
   # Install client dependencies
   cd ../client
   npm install
   ```

3. **Environment Configuration**
   
   Create `.env` file in the server directory:
   ```env
   MONGODB_URI=your_mongodb_connection_string
   JWT_SECRET=your_jwt_secret_key
   CLIPDROP_API=your_clipdrop_api_key
   PORT=5000
   ```

4. **Database Setup**
   - Ensure MongoDB is running
   - The application will automatically create necessary collections

## 🏃‍♂️ Running the Application

### Development Mode

1. **Start the server**
   ```bash
   cd server
   npm run server
   ```

2. **Start the client**
   ```bash
   cd client
   npm run dev
   ```

3. **Access the application**
   - Frontend: http://localhost:5173
   - Backend: http://localhost:5000

### Production Mode

1. **Build the client**
   ```bash
   cd client
   npm run build
   ```

2. **Start the server**
   ```bash
   cd server
   npm start
   ```

## 💳 Credit System

Imagify operates on a credit-based system:

| Plan | Price | Credits | Best For |
|------|-------|---------|----------|
| Basic | $10 | 100 | Personal use |
| Advanced | $50 | 500 | Regular content creation |
| Business | $250 | 2500 | Professional/business use |

Each image generation consumes 1 credit.

## 🔧 API Endpoints

### Authentication
- `POST /api/user/register` - User registration
- `POST /api/user/login` - User login
- `GET /api/user/profile` - Get user profile

### Image Generation
- `POST /api/image/generate` - Generate image from text prompt
- `GET /api/user/credits` - Check credit balance

### Payments
- `POST /api/user/buy-credits` - Purchase credits

## 🎨 How It Works

Imagify makes AI image generation simple and accessible through a straightforward 3-step process:

1. **Describe Your Vision**: Type a phrase, sentence, or paragraph describing the image you want to create. For example: "A serene mountain landscape at sunset with a flowing river" or "A futuristic robot playing chess in a library"

2. **Watch the Magic**: Our AI engine powered by ClipDrop API processes your text description and generates a high-quality, unique image in just seconds. The AI understands context, style, and composition to bring your vision to life.

3. **Download & Share**: Once generated, instantly download your creation in high resolution or share it directly from our platform. Each generation consumes 1 credit from your account balance.

## 🤝 Contributing

We welcome contributions from the community! Here's how you can help improve Imagify:

### Getting Started
1. **Fork the repository** - Click the "Fork" button on GitHub to create your own copy
2. **Clone your fork** - `git clone https://github.com/yourusername/Imagify.git`
3. **Create a feature branch** - `git checkout -b feature/amazing-feature`

### Making Changes
4. **Make your changes** - Add new features, fix bugs, or improve documentation
5. **Test your changes** - Ensure the application works correctly
6. **Commit your changes** - `git commit -m 'Add some amazing feature'`
7. **Push to your branch** - `git push origin feature/amazing-feature`

### Submitting Changes
8. **Open a Pull Request** - Go to the original repository and click "New Pull Request"
9. **Describe your changes** - Explain what you added/fixed and why
10. **Wait for review** - We'll review and provide feedback

### Areas We'd Love Help With
- 🎨 UI/UX improvements and new design components
- 🚀 Performance optimizations and bug fixes
- 📱 Mobile responsiveness enhancements
- 🔒 Security improvements and testing
- 📚 Documentation and code comments
- 🧪 Unit tests and integration tests

## 📝 License

This project is licensed under the ISC License.

## 🙏 Acknowledgments

- **ClipDrop API** for providing the text-to-image generation service
- **Razorpay** for payment processing
- **Open source community** for the amazing tools and libraries

## 📞 Support

For support, questions, or feature requests, please open an issue in the repository.

---

**Transform your ideas into reality with Imagify - Where imagination meets AI-powered creativity! 🎨✨**


