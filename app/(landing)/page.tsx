import { Button } from "@/components/ui/button";
import Link from 'next/link';
import { nextTick } from "process";

const LandingPage = () => {
    return ( 
        <div>
            Landing Page (Unprotected)
            <div>
                <Link href="/sign-in">
                  <Button>LOGIN</Button>
                </Link>
                <Link href="/sign-up">
                  <Button>SIGN UP</Button>
                </Link>
            </div>
        </div>
     );
}
 
export default LandingPage;