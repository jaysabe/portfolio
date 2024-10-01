import { Separator } from "./ui/separator";
import { Card, CardContent } from "./ui/card";
import Image from "next/image";

export const InstagramPosts = () => {
  const postOption = [
    {
      url: "https://www.instagram.com/p/CKAK54cB39P/?igsh=MW10aDV6Y3JmOWkwaw==",
      image: "/static/yellow.jpeg",
      width: 500,
      height: 300,
    },
    {
      url: "https://www.instagram.com/p/CFKxz5_B0kk/?igsh=MTM5d2o4eGd2Nzdteg==",
      image: "/static/pour.jpeg",
      width: 500,
      height: 300,
    },
    {
      url: "https://www.instagram.com/p/Bxinik4nhry/?igsh=bWZ5bmlkbTBma3Bx",
      image: "/static/nitro.jpeg",
      width: 500,
      height: 300,
    },
  ];
  return (
    <div className="text-center">
      <h1 className="pb-4 font-bold tracking-tight text-5xl lg:text-5xl">
        Off Work You Can Find Me...
      </h1>
      <div className="flex items-center justify-center">
        <Separator className="my-4 mx-auto bg-slate-100/20 h-0.5 w-40" />
      </div>
      <div className="instagram-posts flex justify-center">
        <div className="mt-10 grid sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
          {postOption.map((post, index) => (
            <a
              key={index}
              href={post.url}
              target="_blank"
              rel="noopener noreferrer"
              className="w-full max-w-md mx-auto"
            >
              <Card className="hover:scale-105 hover:shadow-lg transition-transform">
                <CardContent>
                  <Image
                    src={post.image}
                    alt={`Instagram Post ${index + 1}`}
                    width={post.width}
                    height={post.height}
                    className="rounded-lg"
                  />
                </CardContent>
              </Card>
            </a>
          ))}
        </div>
      </div>
    </div>
  );
};
