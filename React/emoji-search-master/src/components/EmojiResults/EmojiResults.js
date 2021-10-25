import React, { PureComponent, useEffect } from "react";
import PropTypes from "prop-types";
import Clipboard from "clipboard";

import EmojiResultRow from "../EmojiResultRow/EmojiResultRow";
import "./EmojiResults.css";

/**
 *
 * @param {object} props
 * @param {Array<unknown>} props.emojiData
 *
 */
export default function EmojiResults({ emojiData }) {
  return (
    <div className="component-emoji-results">
      {emojiData.map((emoji) => (
        <EmojiResultRow
          key={emoji.title}
          symbol={emoji.symbol}
          title={emoji.title}
        />
      ))}
    </div>
  );
}
