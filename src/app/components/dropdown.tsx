import { useState } from "react";

import { tokens } from "./tokens";

export default function TokenSelector({ onTokenSelect }) {
  const [selectedToken, setSelectedToken] = useState("");

  const handleChange = (event) => {
    const { value } = event.target;
    setSelectedToken(value);
    const tokenData = tokens.find((token) => token.name === value);
    onTokenSelect(tokenData || null); // Pass null or similar when no token matches
  };

  return (
    <div>
      <input
        type="text"
        value={selectedToken}
        onChange={handleChange}
        list="token-names"
        placeholder="Enter token name"
        className="border border-gray-300 rounded-md p-2 w-full"
      />
      <datalist id="token-names">
        {tokens.map((token) => (
          <option key={token.name} value={token.name}>
            {token.name}
          </option>
        ))}
      </datalist>
    </div>
  );
}
