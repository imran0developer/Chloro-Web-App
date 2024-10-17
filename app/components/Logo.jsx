// components/Logo.js
import Image from 'next/image';

const Logo = () => {
    return (
        <div className="flex justify-center">
            <Image
                width={100}
                height={30}
                src="https://askproject.net/chloro/wp-content/uploads/sites/23/2021/08/logo_Asset-1-1024x283.png"
                alt="Company Logo"
                className="" // Responsive classes
            />
        </div>
    );
};

export default Logo;
