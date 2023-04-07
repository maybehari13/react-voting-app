import React, {useState} from "react";
import { FormControl, FormLabel, RadioGroup, FormControlLabel, Radio } from "@mui/material";

const VotingPanel = (props) => {

    const [showMessage, setShowMessage] = useState(false);
    const [showVote, setShowVote] = useState("");
    const [disableOnVote, setDisableOnVote] = useState(true);
    const [radioDisabled, setRadioDisabled] = useState(false)

    const votingParties = [
        {
            value: "BJP",
            label: "BJP",
        },
        {
            value: "Congress",
            label: "Congress",
        },
        {
            value: "DMK",
            label: "DMK",
        },
        {
            value: "ADMK",
            label: "ADMK",
        },
        {
            value: "NOTA",
            label: "NOTA",
        }
    ]

    const doSomething = () => {
        setShowMessage(true);
        setDisableOnVote(false);
        setRadioDisabled(true);
    };

    const handleChange = (event) => {
        setShowVote(event.target.value);
    };

    return (
        <div className="VotingPanel">
            <FormControl>
            <FormLabel id="parties-to-vote">Voting Panel</FormLabel>
            <RadioGroup
                aria-labelledby="parties-to-vote"
                name="radio-buttons-group"
                value={showVote}
                onChange={handleChange}
            >
                {votingParties.map((votingParties) => {
                    return (
                        <FormControlLabel
                            key={votingParties.value}
                            disabled={radioDisabled} 
                            value={votingParties.value}
                            control={<Radio />}
                            label={votingParties.label} />
                    );
                })}
                {/* <FormControlLabel value="BJP" control={<Radio />} label="BJP" />
                <FormControlLabel value="Congress" control={<Radio />} label="Congress" />
                <FormControlLabel value="DMK" control={<Radio />} label="DMK" />
                <FormControlLabel value="ADMK" control={<Radio />} label="ADMK" />
                <FormControlLabel value="NOTA" control={<Radio />} label="NOTA" /> */}
            </RadioGroup>
            {disableOnVote && <button onClick={doSomething}>
                Vote
            </button>}
            {showMessage && <p>I Voted for {showVote}</p>}
            </FormControl>
        </div>
    )
}

export default VotingPanel