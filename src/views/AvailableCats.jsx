import { useEffect, useState } from 'react';

const availableCats = [
  { name: 'Whiskers', age: '2', breed: 'Sphynx' },
  { name: 'Mittens', age: '2', breed: 'Peterbald' },
  { name: 'Shadow', age: '1', breed: 'Birman' },
  { name: 'Pumpkin', age: '3', breed: 'Abyssinian' },
  { name: 'Luna', age: '4', breed: 'Persian' },
  { name: 'Simba', age: '2', breed: 'Siamese' },
];

export default function AvailableCats() {
  const [cats, setCats] = useState([]);
  const [filteredCats, setFilteredCats] = useState([]);
  const [breedFilter, setBreedFilter] = useState('');
  const [nameFilter, setNameFilter] = useState('');

  useEffect(() => {
    // Fetch cat images from an API endpoint and assign it to the featuredCats list
    const fetchCatImages = async () => {
      try {
        const responses = await Promise.all(availableCats.map(() => fetch('https://api.thecatapi.com/v1/images/search').then((res) => res.json())));
        const catsWithImages = availableCats.map((cat, index) => ({
          ...cat,
          image: responses[index][0].url,
        }));

        setCats(catsWithImages);
        setFilteredCats(catsWithImages);
      } catch (error) {
        console.error('Error fetching cat images:', error);
      }
    };

    fetchCatImages();
  }, []);

  useEffect(() => {
    // Filter cats by breed in real-time
    const filtered = cats.filter((cat) => breedFilter === '' || cat.breed === breedFilter);
    setFilteredCats(filtered);
  }, [breedFilter, cats]);

  const handleSearch = () => {
    // Filter cats by name when search button is clicked or Enter key is pressed
    const filtered = cats.filter((cat) => (breedFilter === '' || cat.breed === breedFilter) && (nameFilter === '' || cat.name.toLowerCase().includes(nameFilter.toLowerCase())));
    setFilteredCats(filtered);
  };

  const handleKeyPress = (e) => {
    if (e.key === 'Enter') {
      handleSearch();
    }
  };

  return (
    <section className="text-center mt-4">
      <div className="d-flex justify-content-between align-items-center mb-4">
        <h2 className="mb-3">Available Cats</h2>
        <div className="d-flex">
          <select value={breedFilter} onChange={(e) => setBreedFilter(e.target.value)} className="form-select me-2" style={{ width: '200px' }}>
            <option value="">Select Breed</option>
            <option value="Sphynx">Sphynx</option>
            <option value="Peterbald">Peterbald</option>
            <option value="Birman">Birman</option>
            <option value="Abyssinian">Abyssinian</option>
            <option value="Persian">Persian</option>
            <option value="Siamese">Siamese</option>
          </select>
          <input
            type="text"
            value={nameFilter}
            onChange={(e) => setNameFilter(e.target.value)}
            onKeyPress={handleKeyPress}
            placeholder="Search by name"
            className="form-control me-2"
            style={{ width: '200px' }}
          />
          <button className="btn btn-primary" onClick={handleSearch}>
            Search
          </button>
        </div>
      </div>
      <hr></hr>
      <div className="mt-5 row g-4 cats-container" id="cats-container">
        {filteredCats.map((cat, i) => (
          <div key={i} className="col-md-4">
            <div className="cat-card">
              <img src={cat.image} alt={cat.name} className="img-fluid mb-2" style={{ borderRadius: '8px', height: '200px', objectFit: 'cover' }} />
              <div className="cat-info">
                <h3 className="h5 mb-1">{cat.name}</h3>
                <p className="mb-0">Age: {cat.age}</p>
                <p className="mb-0">Breed: {cat.breed}</p>
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}