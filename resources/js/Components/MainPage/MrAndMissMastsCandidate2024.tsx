import Text from "../customUI/Text"
import candidate_1 from '../../../assets/mr&mssMastsCandidate/candidate_1.jpg'
import candidate_2 from '../../../assets/mr&mssMastsCandidate/candidate_2.jpg'
import candidate_3 from '../../../assets/mr&mssMastsCandidate/candidate_3.jpg'
import candidate_4 from '../../../assets/mr&mssMastsCandidate/candidate_4.jpg'
import candidate_5 from '../../../assets/mr&mssMastsCandidate/candidate_5.jpg'
import candidate_6 from '../../../assets/mr&mssMastsCandidate/candidate_6.jpg'
import candidate_7 from '../../../assets/mr&mssMastsCandidate/candidate_7.jpg'
import candidate_8 from '../../../assets/mr&mssMastsCandidate/candidate_8.jpg'
import candidate_9 from '../../../assets/mr&mssMastsCandidate/candidate_9.jpg'
import candidate_10 from '../../../assets/mr&mssMastsCandidate/candidate_10.jpg'
import candidate_11 from '../../../assets/mr&mssMastsCandidate/candidate_11.jpg'
import candidate_12 from '../../../assets/mr&mssMastsCandidate/candidate_12.jpg'
import candidate_13 from '../../../assets/mr&mssMastsCandidate/candidate_13.jpg'
import candidate_14 from '../../../assets/mr&mssMastsCandidate/candidate_14.jpg'
import candidate_15 from '../../../assets/mr&mssMastsCandidate/candidate_15.jpg'


export default () => {

    return <>
        <div>
            <Text variant="headingSmall">Mr and Miss Masts 2024 Candidate</Text>
            <div className="flex flex-col gap-5">
                <div className="flex flex-row justify-around items-start">
                    <img alt="candidate_1" src={candidate_1} style={{ height: 500, width: 300 }} />
                    <img alt="candidate_2" src={candidate_2} style={{ height: 500, width: 300 }} />
                    <img alt="candidate_3" src={candidate_3} style={{ height: 500, width: 300 }} />
                    <img alt="candidate_4" src={candidate_4} style={{ height: 500, width: 300 }} />
                    <img alt="candidate_5" src={candidate_5} style={{ height: 500, width: 300 }} />
                </div>
                <div className="flex flex-row justify-around items-start">
                    <img alt="candidate_6" src={candidate_6} style={{ height: 500, width: 300 }} />
                    <img alt="candidate_7" src={candidate_7} style={{ height: 500, width: 300 }} />
                    <img alt="candidate_8" src={candidate_8} style={{ height: 500, width: 300 }} />
                    <img alt="candidate_9" src={candidate_9} style={{ height: 500, width: 300 }} />
                    <img alt="candidate_10" src={candidate_10} style={{ height: 500, width: 300 }} />
                </div>
                <div className="flex flex-row justify-around items-start">
                    <img alt="candidate_11" src={candidate_11} style={{ height: 500, width: 300 }} />
                    <img alt="candidate_12" src={candidate_12} style={{ height: 500, width: 300 }} />
                    <img alt="candidate_13" src={candidate_13} style={{ height: 500, width: 300 }} />
                    <img alt="candidate_14" src={candidate_14} style={{ height: 500, width: 300 }} />
                    <img alt="candidate_15" src={candidate_15} style={{ height: 500, width: 300 }} />
                </div>
            </div>
        </div>
    </>
}