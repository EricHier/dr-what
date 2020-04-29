<script>
    import {applyDarkMode} from "tailwindcss-dark-mode/prefers-dark";

    export default {
        created() {
            applyDarkMode();
        }
    }
</script>