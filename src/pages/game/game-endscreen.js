export default function Gmae() {

    const test = document.querySelector('.test')
    test.innerHTML = window.localStorage.getItem('mostRecentScore')

    return(
    <div>
    <div>ending</div>
    <div class="test">t</div>
    <script src="endScreen.js"></script>
    </div>
    );
}