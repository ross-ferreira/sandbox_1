import { useState } from "react";

import { withStyles } from "@material-ui/core/styles";
import Menu from "@material-ui/core/Menu";
import MenuItem from "@material-ui/core/MenuItem";
import TextField from "@material-ui/core/Textfield";

import { useStyles } from "./Wysiwyg.styles";

const Wysiwyg = () => {
  const classes = useStyles();
  const [textField, setTextField] = useState("");
  const [anchorEl, setAnchorEl] = useState(null);
  const [links, setLinks] = useState([]);
  const [currentCaretPos, setCurrentCaretPos] = useState(null);

  const handleChange = (e) => {
    console.log(e);
    const string = e.target.value;
    const caretPos = e.target.selectionStart;
    if (string.charAt(string.length - 1) === "@") {
      console.log("found @");
      setAnchorEl(e.currentTarget);
      setCurrentCaretPos(caretPos);
      return;
    }
    setTextField(string);
  };

  const handleInsertLink = (e) => {
    const textContent = e.target.textContent;
    const node = document.querySelectorAll('#text-output')[0];
    console.log(node)
    node.innerHTML = `<span style="color:red;">${textContent}</span>`;
    setLinks(
      links.push({
        positionStart: currentCaretPos,
        linkName: textContent,
        positionEnd: textContent.length,
      })
    );
    setTextField(textField.concat(textContent));
    setAnchorEl(null);
  };

  console.log(textField);

  return (
    <>
    <div style={{position:"relative", display:"block", height:"100%"}}>
      <TextField
        margin="dense"
        id="standard-multiline-flexible"
        multiline
        rowsMax={4}
        value={textField}
        onChange={handleChange}
        label="Field"
        style={{ width: "500px" }}
      />
      <div id="text-output" className={classes.textOutput}>{textField}</div>
      </div>
      <Menu
        elevation={0}
        getContentAnchorEl={null}
        anchorOrigin={{
          vertical: "bottom",
          horizontal: "center",
        }}
        transformOrigin={{
          vertical: "top",
          horizontal: "center",
        }}
        id="simple-menu"
        anchorEl={anchorEl}
        keepMounted
        open={Boolean(anchorEl)}
        onClose={() => setAnchorEl(null)}
      >
        <MenuItem onClick={handleInsertLink}>Luke Skywalker</MenuItem>
        <MenuItem onClick={handleInsertLink}>Chewbaker</MenuItem>
        <MenuItem onClick={handleInsertLink}>R2 D2</MenuItem>
      </Menu>
    </>
  );
};

export default Wysiwyg;
