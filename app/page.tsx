import Image from "next/image";

const page = () => {
  return (
    <div className="flex flex-col">
      <Image
        alt=""
        src="https://plus.unsplash.com/premium_photo-1681977755496-205f938f7ade?q=80&w=1888&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
        width={200}
        height={200}
      />
      <Image
        alt=""
        src="https://plus.unsplash.com/premium_photo-1673152979577-64b00806a6d1?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxlZGl0b3JpYWwtZmVlZHw1fHx8ZW58MHx8fHx8"
        width={200}
        height={200}
      />
      <Image
        alt=""
        src="https://images.unsplash.com/photo-1713204767316-87d43b68878d?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxlZGl0b3JpYWwtZmVlZHwxMXx8fGVufDB8fHx8fA%3D%3D"
        width={200}
        height={200}
      />
    </div>
  );
};

export default page;
