 // Coordinates (approximate)
    const cityCoordinates = {
      Agra: { latitude: 27.1767, longitude: 78.0081 },
      Bengaluru: { latitude: 12.9716, longitude: 77.5946 },
      Bhutan: { latitude: 27.5142, longitude: 90.4336 }, // outside India
      Bikaner: { latitude: 28.0229, longitude: 73.3119 },
      Bodhgaya: { latitude: 24.6961, longitude: 84.991 },
      Chennai: { latitude: 13.0827, longitude: 80.2707 },
      Delhi: { latitude: 28.6139, longitude: 77.209 },
      Goa: { latitude: 15.2993, longitude: 74.124 },
      Hyderabad: { latitude: 17.385, longitude: 78.4867 },
      Jaipur: { latitude: 26.9124, longitude: 75.7873 },
      Jaisalmer: { latitude: 26.9157, longitude: 70.9083 },
      Jodhpur: { latitude: 26.2389, longitude: 73.0243 },
      Kochi: { latitude: 9.9312, longitude: 76.2673 },
      Kolkata: { latitude: 22.5726, longitude: 88.3639 },
      Maldives: { latitude: 3.2028, longitude: 73.2207 }, // outside India
    };

    // SVG path of Bootstrap icon "geo-alt-fill"
    // Taken from https://icons.getbootstrap.com/icons/geo-alt-fill/
    // Adjusted size and styling
    const geoAltFillSVGPath =
      "M12 0c-4.97 0-9 4.03-9 9 0 6.08 9 15 9 15s9-8.92 9-15c0-4.97-4.03-9-9-9zM12 12a3 3 0 1 1 0-6 3 3 0 0 1 0 6z";

    am5.ready(function () {
      let root = am5.Root.new("indiaMap");

      root.setThemes([am5themes_Animated.new(root)]);

      let chart = root.container.children.push(
        am5map.MapChart.new(root, {
          panX: "none",
          panY: "none",
          wheelY: "none",
          projection: am5map.geoMercator(),
        })
      );

      chart.series.push(
        am5map.MapPolygonSeries.new(root, {
          geoJSON: am5geodata_indiaLow,
          fill: am5.color(0xD3D3D3),// saffron color
          stroke: am5.color(0xffffff), // optional: white border
          strokeWidth: 1,
        })
      );

      let pointSeries = chart.series.push(
        am5map.MapPointSeries.new(root, {
          calculateAggregates: true,
        })
      );

      // Function to create custom geo-alt-fill marker using SVG path
      function createGeoAltMarker(root) {
        return am5.Graphics.new(root, {
          svgPath: geoAltFillSVGPath,
          fill: am5.color(0x0d6efd), // bootstrap blue
          stroke: am5.color(0xffffff),
          strokeWidth: 1.5,
          scale: 1.5,
          centerX: am5.p50,
          centerY: am5.p100,
          cursorOverStyle: "pointer",
        });
      }

      function addMarker(city) {
        pointSeries.data.setAll([]); // clear previous markers
        const coords = cityCoordinates[city];
        if (!coords) return;

        pointSeries.data.push({
          geometry: {
            type: "Point",
            coordinates: [coords.longitude, coords.latitude],
          },
          title: city,
        });
      }

      // Custom bullet to replace default circle with geo-alt-fill icon
      pointSeries.bullets.push(function () {
        return am5.Bullet.new(root, {
          sprite: createGeoAltMarker(root),

        });
      });

      // Initial marker on Delhi
      addMarker("Delhi");

      // Location list click logic
      document.querySelectorAll(".location-item").forEach((el) => {
        el.addEventListener("click", function () {
          document
            .querySelectorAll(".location-item")
            .forEach((item) => item.classList.remove("active"));
          this.classList.add("active");

          const city = this.getAttribute("data-city");
          addMarker(city);
        });
      });
    });