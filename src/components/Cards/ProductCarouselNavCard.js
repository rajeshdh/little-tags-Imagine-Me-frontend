export default function ProductCarouselNavCard({ image }) {
    return <div>
        <div className="h-20 md:h-28 lg:h-24 mx-1 bg-center bg-contain bg-no-repeat border rounded-full" style={{ backgroundImage: `url(${image})` }}></div>
    </div>
}