import { useMemo, useState } from "react";
import { Arc } from "@visx/shape";
import { Group } from "@visx/group";
import { GradientLightgreenGreen } from "@visx/gradient";
import { scaleBand, scaleRadial } from "@visx/scale";
import { Text } from "@visx/text";

// function to render plot
export const ExamplePlot = ({ recipe, width, height, showControls = true }) => {
  const data = Object.values(recipe.totalDaily);

  // defining mapping funtions
  const getLabel = (d) => d.label;
  const getLabelQuantity = (d) => Number(d.quantity) / recipe.yield;
  const quantitySort = (a, b) => b.quantity - a.quantity;
  const alphabeticalSort = (a, b) => a.label.localeCompare(b.label);
  const toRadians = (x) => (x * Math.PI) / 180;
  const toDegrees = (x) => (x * 180) / Math.PI;

  // chart bar styling
  const barColor = "#fd6f2f";
  const margin = { top: 0, bottom: 0, left: 0, right: 0 };

  // defining the useStates for the controls
  const [rotation, setRotation] = useState(0);
  const [sortAlphabetically, setSortAlphabetically] = useState(true);

  //margin bounds
  const xMax = width - margin.left - margin.right;
  const yMax = height - margin.top - margin.bottom;
  const radiusMax = Math.min(xMax, yMax) / 2;
  const innerRadius = radiusMax / 3;

  // capturing data from previous calculations
  const xDomain = useMemo(
    () =>
      data
        .sort(sortAlphabetically ? alphabeticalSort : quantitySort)
        .map(getLabel),
    [sortAlphabetically]
  );

  const xScale = useMemo(
    () =>
      scaleBand({
        range: [0 + rotation, 2 * Math.PI + rotation],
        domain: xDomain,
        padding: 0.2,
      }),
    [rotation, xDomain]
  );

  const yScale = useMemo(
    () =>
      scaleRadial({
        range: [innerRadius, radiusMax],
        domain: [0, Math.max(...data.map(getLabelQuantity))],
      }),
    [innerRadius, radiusMax]
  );

  return width < 10 ? null : (
    <>
      <svg width={width} height={height}>
        <GradientLightgreenGreen id="radial-bars-green" />
        <rect
          width={width}
          height={height}
          fill="url(#radial-bars-gray)"
          rx={14}
        />
        <Group top={yMax / 2 + margin.top} left={xMax / 2 + margin.left}>
          {data.map((d) => {
            const letter = getLabel(d);
            const frequency = Math.floor(getLabelQuantity(d)) + "%";
            const startAngle = xScale(letter);
            const midAngle = startAngle + xScale.bandwidth() / 2;
            const endAngle = startAngle + xScale.bandwidth();

            const outerRadius = yScale(getLabelQuantity(d)) ?? 0;

            // convert polar coordinates to cartesian for drawing labels
            const textRadius = outerRadius + 4;
            const textX = textRadius * Math.cos(midAngle - Math.PI / 2);
            const textY = textRadius * Math.sin(midAngle - Math.PI / 2);

            return (
              <>
                <Arc
                  key={`bar-${letter}`}
                  cornerRadius={4}
                  startAngle={startAngle}
                  endAngle={endAngle}
                  outerRadius={outerRadius}
                  innerRadius={innerRadius}
                  fill={barColor}
                />
                <Text
                  x={textX}
                  y={textY}
                  dominantBaseline="start"
                  textAnchor="end"
                  fontSize={13}
                  fontWeight="bold"
                  fill="black"
                  transform={`rotate(${
                    toDegrees(midAngle) + 90
                  }, ${textX}, ${textY})`}
                >
                  {letter}
                </Text>

                <Text
                  x={textX}
                  y={textY + 11} // Adjust this value to control the spacing
                  dominantBaseline="middle"
                  textAnchor="end"
                  fontSize={10}
                  // fill={barColor}
                  fill="black"
                  transform={`rotate(${
                    toDegrees(midAngle) + 90
                  }, ${textX}, ${textY})`}
                >
                  {frequency}
                </Text>
              </>
            );
          })}
        </Group>
      </svg>
      {showControls && (
        <div className="controls">
          <label>
            <strong>Rotate</strong>&nbsp;
            <input
              type="range"
              min="0"
              max="360"
              value={toDegrees(rotation)}
              onChange={(e) => setRotation(toRadians(Number(e.target.value)))}
            />
            &nbsp;{toDegrees(rotation).toFixed(0)}°
          </label>
          <br />
          <div>
            <strong>Sort bars</strong>&nbsp;&nbsp;&nbsp;
            <label>
              <input
                type="radio"
                checked={sortAlphabetically}
                onChange={() => setSortAlphabetically(true)}
              />
              Alphabetically&nbsp;&nbsp;&nbsp;
            </label>
            <label>
              <input
                type="radio"
                checked={!sortAlphabetically}
                onChange={() => setSortAlphabetically(false)}
              />
              By frequency
            </label>
          </div>
          <br />
        </div>
      )}
      <style jsx>{`
        .controls {
          font-size: 14px;
          line-height: 1.5em;
        }
      `}</style>
    </>
  );
};
