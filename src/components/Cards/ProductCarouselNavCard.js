export default function ProductCarouselNavCard({ image }) {
    return <div>
        <div className="h-24 w-24 mx-1 bg-center bg-contain bg-no-repeat border rounded-full" style={{ backgroundImage: `url(${image})` }}></div>
    </div>
}