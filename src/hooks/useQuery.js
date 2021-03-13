export default function useQuery(location) {
    return new URLSearchParams(location.search);
}